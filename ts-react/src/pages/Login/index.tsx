import React, { Component } from 'react';
import qs from 'qs'
import './style.css'
import { Form, Input, Button, message } from 'antd';
import { Redirect } from 'react-router-dom'
import { LockOutlined } from '@ant-design/icons';
import axios from '../../axios'
interface FormFields {
  password: string
}
class NormalLoginForm extends Component {
  state = {
    isLogin: false
  }
  render() {
    const { isLogin } = this.state
    const _self = this
    const onFinish = (values: FormFields) => {
      axios.post('/api/login', qs.stringify({
        password: values.password
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(res => {
        if (res.data) {
          _self.setState({
            isLogin: true
          })
        } else {
          message.error('登录失败')
        }
      })
    };
    console.log('isLogin: ', isLogin);
    return (
      isLogin
        ? <Redirect to="/"/>
        : (
          <div className="login-page">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入登录密码!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        )
    )
  }
}

export default NormalLoginForm