import React from "react";
import "./Controlled.css";
import { Button, Checkbox, Form, Input } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Cascader, InputNumber, Select, Space } from "antd";

const Practice = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="title">Sign Up</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          ipsa.
        </p>
        <Form
          className="form"
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tel number"
            name="number"
            rules={[
              {
                required: true,
                message: "Please input your tel number!",
              },
            ]}
          >
            <InputNumber addonBefore="+" defaultValue={998} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Practice;
