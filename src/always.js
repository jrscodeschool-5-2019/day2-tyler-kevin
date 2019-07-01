import identity from './identity';

function always(value) {
  return () => {
    identity(value);
  };
}
