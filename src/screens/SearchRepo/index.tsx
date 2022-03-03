import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Linking,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import api from "../../services/api";

import githubLogo from '../../assets/images/github-logo.png';

import {
  Container,
  Header,
  Title,
  GithubLogo,
  UserName,
  HeaderText,
  Body,
  Input,
  SearchRepoButton,
  SearchRepoButtonText,
  Repositories,
  RepoName,
  LineSeparator,
  RepoStatus
} from "./styles";

interface UserProps {
  login: string;
  avatar_url: string;
  public_repos: number;
}

interface RepositoryProps {
  id: string;
  name: string;
  clone_url: string;
  owner: UserProps;
  open_issues: string;
  forks: string;
  stargazers_count: string;
}

interface LinkProps {
  url: string;
  children: ReactNode;
}

export function SearchRepo() {
  const [inputRepoName, setInputRepoName] = useState('');
  const [user, setUser] = useState<UserProps>();
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [repoLength, setRepoLength] = useState();

  function getRepositories() {
    if (inputRepoName.length === 0) {
      return Alert.alert('Insert an github user name');
    }

    setRepositories([]);
    setInputRepoName('');

    api.get(`/users/${inputRepoName}/repos?per_page=100`).then((response) => {
      setRepositories(response.data);
      setUser(response.data[0].owner);

    }).catch(() => {
      Alert.alert('User not found');
    });

    api.get(`/users/${inputRepoName}`).then((response) => {
      setRepoLength(response.data.public_repos);
    });
  }

  function OpenRepositoryPage({ url, children }: LinkProps) {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (!supported) {
        Alert.alert(`Can't open this URL: ${url}`);
      }

      await Linking.openURL(url);
    }, [url]);

    return (
      <TouchableOpacity onPress={handlePress}>
        <RepoName>{children}</RepoName>
      </TouchableOpacity>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Github Repository Explorer</Title>

        {
          user
            ? <GithubLogo source={{ uri: user.avatar_url }} />
            : <GithubLogo source={githubLogo as any} />
        }

        {
          user
            ? (
              <>
                <UserName>{user.login}</UserName>
                {
                  repoLength != 1
                    ? <HeaderText>{repoLength} repositories</HeaderText>
                    : <HeaderText>{repoLength} repository</HeaderText>
                }
              </>
            ) : (
              <HeaderText>
                To open the repository page {'\n'}
                Click on the repo's name
              </HeaderText>
            )
        }
      </Header>

      <Body>
        <Input
          placeholder='github-user-name'
          onChangeText={setInputRepoName}
          value={inputRepoName}
        />

        <SearchRepoButton onPress={getRepositories}>
          <SearchRepoButtonText>Search</SearchRepoButtonText>
        </SearchRepoButton>

        <Repositories>
          <FlatList
            data={repositories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <OpenRepositoryPage url={item.clone_url}>
                  {item.name}
                </OpenRepositoryPage>

                <RepoStatus>
                  <Text>Open Issues: {item.open_issues}</Text>
                  <Text>Forks: {item.forks}</Text>
                  <Text>Stars: {item.stargazers_count}</Text>
                </RepoStatus>
              </View>
            )}
            ItemSeparatorComponent={() => <LineSeparator />}
          />
        </Repositories>
      </Body>
    </Container>
  );
}
