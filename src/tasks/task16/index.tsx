/* eslint-disable react/jsx-key */
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AppleIcon from '@mui/icons-material/Apple';
import SpaIcon from '@mui/icons-material/Spa';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';

type Category = 'dairy' | 'fruit' | 'vegetable';

type Product = {
  name: string;
  category: Category;
};
const products: Product[] = [
  { name: 'Milk', category: 'dairy' },
  { name: 'Cheese', category: 'dairy' },
  { name: 'Yogurt', category: 'dairy' },
  { name: 'Butter', category: 'dairy' },
  { name: 'Apple', category: 'fruit' },
  { name: 'Banana', category: 'fruit' },
  { name: 'Orange', category: 'fruit' },
  { name: 'Grapes', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Broccoli', category: 'vegetable' },
  { name: 'Spinach', category: 'vegetable' },
  { name: 'Potato', category: 'vegetable' },
  { name: 'Strawberry', category: 'fruit' },
  { name: 'Blueberry', category: 'fruit' },
  { name: 'Cauliflower', category: 'vegetable' },
];
const icons: Record<Category, JSX.Element> = {
  fruit: <AppleIcon />,
  dairy: <AgricultureIcon />,
  vegetable: <SpaIcon />,
};

const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

const isSubstring = (text: string, searchText: string) => {
  return text
    .toLocaleLowerCase()
    .includes(searchText.toLocaleLowerCase().trim());
};
export const Task16: FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <Box
      component={Paper}
      sx={{
        backgroundColor: '#dddddd',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        margin: '10px',
        padding: '10px',
      }}
    >
      <TextField
        id='outlined-search'
        label='Search field'
        type='search'
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <List component={Paper}>
        {sortedProducts
          .filter((product) => isSubstring(product.name, searchText))
          .map((product) => {
            return (
              <ListItem>
                <ListItemIcon>{icons[product.category]}</ListItemIcon>
                <ListItemText primary={product.name} />
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};
