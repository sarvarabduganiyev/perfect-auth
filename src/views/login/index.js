import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Input,
  Typography,
  Descriptions,
} from "antd";
import {
  LockOutlined,
  MailOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import authService from "./../../services/auth";
import { useDispatch } from "react-redux";
import { authTokenReducer } from "../../redux/slices/auth";
import "../../styles/login.css";
import { toast } from "react-toastify";
import { PROJECT_NAME } from "../../configs/global-app";

const { Title } = Typography;
function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const credentials = [
    {
      username: "user_task",
      password: "user_task",
      subdomain: "toko",
    },
  ];
  const submitLogin = (values) => {
    setLoading(true);
    const body = {
      _username: values.username,
      _password: values.password,
      _subdomain: values.subdomain,
    };
    authService
      .login(body)
      .then((res) => {
        dispatch(authTokenReducer(res.data.token));
        toast.success("Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const audio = new Audio(
          "https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7"
        );
        audio.play();
      })
      .catch(() => {
        toast.error("Error Login", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }).finally(() => setLoading(false));
    console.log(values);
  };
  const copyCredentials = (event, item) => {
    event.preventDefault();
    form.setFieldsValue({
      username: item.username,
      password: item.password,
      subdomain: item.subdomain,
    });
  };
  return (
    <div className="login-wrapprer">
      <Row justify="center">
        <Col>
          <Card>
            <div>
              <div>
                <Title className="project-name">{PROJECT_NAME}</Title>
              </div>
              <Row justify="center">
                <Col>
                  <Form
                    name="login-form"
                    layout="vertical"
                    form={form}
                    onFinish={submitLogin}
                    style={{ width: "420px" }}
                  >
                    <Form.Item
                      name="username"
                      label="Username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input prefix={<MailOutlined />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="subdomain"
                      label="Subdomain"
                      rules={[
                        {
                          required: true,
                          message: "Please input your subdomain!",
                        },
                      ]}
                    >
                      <Input
                        prefix={<AppstoreAddOutlined />}
                        placeholder="Subdomain"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        block
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                      >
                        Login
                      </Button>
                    </Form.Item>
                    <Descriptions bordered size="small">
                      {credentials.map((item, idx) => (
                        <React.Fragment key={idx}>
                          <Descriptions.Item span={3} label={"Username"}>
                            {item.username}
                          </Descriptions.Item>
                          <Descriptions.Item span={4} label={"Password"}>
                            {item.password}
                          </Descriptions.Item>
                          <Descriptions.Item span={4} label={"Subdomain"}>
                            {item.subdomain}
                          </Descriptions.Item>
                          <Descriptions.Item span={3}>
                            <Button
                              onClick={(event) => copyCredentials(event, item)}
                              block
                              className="copy-btn"
                              ghost
                              type="primary"
                            >
                              Copy
                            </Button>
                          </Descriptions.Item>
                        </React.Fragment>
                      ))}
                    </Descriptions>
                  </Form>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
