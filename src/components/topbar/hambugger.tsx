const Hambugger = ({
  styles,
  action,
  toggle,
}: {
  toggle: boolean;
  styles: any;
  action: () => void;
}) => {
  return (
    <div className='w-4/12 lg:hidden flex justify-end'>
      <div
        onClick={action}
        className={toggle ? styles.open : styles.ham}
        id='navbar'
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hambugger;
