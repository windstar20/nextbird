import { useCallback, useState } from 'react';

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};
//* setValue 추가 : 바뀐상태적용하고 eslint 점검하기: 8:30
//* setText('')함수
