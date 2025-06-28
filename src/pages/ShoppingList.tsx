import { Header } from '../components/Header';
import { AddItemForm } from '../components/AddItemForm';
import { ItemList } from '../components/ItemList';

export const ShoppingList = () => {
  return (
    <div className='text-center'>
      <Header />
      <AddItemForm />
      <ItemList />
    </div>
  );
};
