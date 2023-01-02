
import styled from 'styled-components';
// Static object
const viewAction = styled.div`
   &:after {
      content: "view";
    }
 `;

 
const baseURL = "https://jsonplaceholder.typicode.com/"

export const aptUrls = {
   userList: baseURL + "users",
}

export const GET = "GET";


export const columns = [
   {
      name: '#No',
      selector: 'id',
      sortable: true,
   },
   {
      name: 'Name',
      selector: 'name',
      sortable: true,
   },
   {
      name: 'Company Name',
      selector: 'company.name',
      sortable: true,
   },
   {
      name: 'Street',
      selector: 'address.street',
      sortable: true,
   },
   {
      name: 'Zipcode',
      selector: 'address.zipcode',
   },
   {
      name: 'Phone number',
      selector: 'address.zipcode',
   },
   {
      name: 'Website',
      selector: 'website',
   },
   {
      name: 'Action',    
      style:viewAction 
   }
];

