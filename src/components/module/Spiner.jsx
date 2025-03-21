import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const Spiner = () => {

  const spinnerStyle = {
    color: '#FBCB07', 
  };

  return (
    <div className="h-screen w-full flex flex-row justify-center items-center bg-[#242424]">
        <Spin indicator={antIcon} style={spinnerStyle} />
    </div>
  );
}

export default Spiner;