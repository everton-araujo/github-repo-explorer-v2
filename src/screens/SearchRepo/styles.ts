import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const GithubLogo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderText = styled.Text`
  text-align: center;
  line-height: 22px;
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-radius: 5px;
  width: 80%;
  height: 32px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #D3D3D3;
  background-color: #FFF;
`;

export const SearchRepoButton = styled.TouchableOpacity`
  border: 1px solid #FFF;
  width: 25%;
  height: 28px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.button};
  justify-content: center;
`;

export const SearchRepoButtonText = styled.Text`
  text-align: center;
`;

export const Repositories = styled.View`
  height: 324px;
  width: 350px;
  background-color: #FFF;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #D3D3D3;
  padding: 10px;
`;

export const RepoName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const LineSeparator = styled.View`
  width: 100%;
  border: 0.5px;
  margin-bottom: 5px;
`;

export const RepoStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  padding-top: 4;
`;
