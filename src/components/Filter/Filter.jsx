import { Input, Label, Button, Wrapper } from './Filter.styled';
import { MdOutlineClear } from 'react-icons/md';
import { findContact } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onInput = event => {
    const searchName = event.target.value.toLowerCase();
    dispatch(findContact(searchName));
  };

  const clearInput = () => {
    dispatch(findContact(''));
  };

  return (
    <Wrapper>
      <Label>
        Find contact by name
        <Input
          type="text"
          value={filter}
          onChange={onInput}
          placeholder={'search'}
        />
        <Button onClick={clearInput}>
          <MdOutlineClear size={21} color="#0D2146" />
        </Button>
      </Label>
    </Wrapper>
  );
};
