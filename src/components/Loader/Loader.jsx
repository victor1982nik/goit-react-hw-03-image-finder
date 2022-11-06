import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </>
  );
};
