import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';

const useTypedDispatch: () => AppDispatch = useDispatch;

export { useTypedDispatch }
