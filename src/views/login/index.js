import { Row, Col, Card, Form, Button, Input, Alert } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import authService from "./../../services/auth";
import { useDispatch } from "react-redux";
import { authTokenReducer } from "../../redux/slices/auth";
import "../../styles/login.css";
import { toast } from "react-toastify";
import { emails, password } from "../../constants/consts";
function Login() {
  const dispatch = useDispatch();

  const submitLogin = (values) => {
    const body = {
      email: values.email,
      password: values.password,
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
      });
    console.log(values);
  };
  return (
    <div className="login-wrapprer">
      <Row justify="center">
        <Col xs={20} sm={20} md={20} lg={10}>
          <Card className="login-card">
            <Alert
              message={`email: ${emails}, password: ${password}`}
              className="alert-login"
              type="success"
            />
            <Form onFinish={submitLogin}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Enter your email",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Enter your password",
                  },
                ]}
              >
                <Input prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
