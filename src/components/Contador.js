
const button = () => {
    const [stateContador, setContador] = useState(0);
  
    const clickHandler = () => {
      setContador(contador + 1);
    };
  
    return (
      <div>
        <button onClick={clickHandler}>{children}</button>
        <p>{parseInt(stateContador)}</p>
      </div>
    );
  };
  

export default button 