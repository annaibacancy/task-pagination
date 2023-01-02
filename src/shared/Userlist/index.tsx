
import styled from 'styled-components';


const UL = styled.ul`   
      
`;

const LI = styled.li`   
    padding: 5px 5px;
    background: #6a5be2;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 15px;

`;
const PLAYERCOUNT = styled.span`

`;

const TEAM_CITY = styled.div`
  display:flex;
  justify-content: space-between;
`

const TEAMNAME = styled.div`
text-transform: uppercase;

`


const CITY = styled.div``
  

interface UserlistProps {
  users: {

  }[],
}



export const Userlist: React.FC<UserlistProps> = ({ ...props }) => {

  const { users } = props;

  return (
    <UL>
      {users && users.map((user: any, index: number) => {
        return <LI key={index}>
            <TEAM_CITY>
              <TEAMNAME>{user.email}</TEAMNAME>
              <CITY>{user.id}</CITY>
            </TEAM_CITY>         
          </LI>
      })
      }
    </UL>
  )
}

export default Userlist;
