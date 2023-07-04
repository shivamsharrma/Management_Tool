import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
// import { RegisterUser } from "../../apicalls/users";
// import { useDispatch, useSelector } from "react-redux";
// import { SetButtonLoading } from "../../redux/loadersSlice";
// import { getAntdFormInputRules } from "../../utils/helpers";

function Register() {
  // const navigate = useNavigate();
  // const { buttonLoading } = useSelector((state) => state.loaders);
  // const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success",values);
};

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-7xl text-white">SHEY-TRACKER</h1>
          <span className=" text-white mt-5">
            One place to track all your business records
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="text-2xl text-gray-700 uppercase">
            Lets get you started
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="First Name"
              name="firstName"
              // rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              // rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email"
              // rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              // rules={getAntdFormInputRules}
            >
              <Input type="password" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              // loading={buttonLoading}
            >
              {/* {buttonLoading ? "Loading" : "Register"} */}
            </Button>

            <div className="flex justify-center mt-5">
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
