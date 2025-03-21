import { Select } from "antd";

const SelectModelProduct = ({ setSelectedModel }) => {
  const handleChange = (value) => {
    setSelectedModel(value);
  };

  return (
    <div className="w-1/2 h-full">
      <Select
        defaultValue=""
        style={{
          width: "100%",
        }}
        onChange={handleChange}
        options={[
          {
            value: "",
            label: "همه",
          },
          {
            value: "apple",
            label: "اپل",
          },
          {
            value: "macbook",
            label: "مک بوک",
          },
          {
            value: "samsung",
            label: "سامسونگ",
          },
          {
            value: "xiaomi",
            label: "شیائومی",
          },
        ]}
      />
    </div>
  );
};

export default SelectModelProduct;
