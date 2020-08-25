import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './style.css'
import { Button, message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import axios from '../../axios'
import moment from 'moment'
interface CourseItem {
  title: string;
  count: number;
}
interface State {
  isLogin: boolean;
  isLoaded: boolean;
  data: {
    [key:string]: CourseItem[]
  }
}
interface LineData {
  name: string;
  type: string;
  data: number[]
}
export default class Home extends Component{
  state: State = {
    isLogin: true,
    isLoaded: false,
    data: {}
  }
  componentDidMount() {
    axios.get('/api/isLogin').then((res) => {
      this.setState({
        isLogin: res.data,
        isLoaded: true
      })
    })
    axios.get('/api/showData').then(res => {
      if (res.data) {
        this.setState({
          data: res.data,
        })
      } 
    })
  }
  handleLogoutClick() {
    const _self = this
    axios.get('/api/logout').then(res => {
      if (res.data) {
        _self.setState({
          isLogin: false,
        })
      }
    })
  }
  handleCrawlerClick() {
    axios.get('/api/getData').then(res => {
      if (res.data) {
        message.success('爬取成功')
      }
    })
  }
  handleShowClick() {
    axios.get('/api/showData').then(res => {
      if (res.data) {
        message.success('获取成功')
      }
    })
  }
  getOption() {
    const { data } = this.state
    const courseNames: string[] = []
    const times: string[] = []
    const tempData: {
      [key: string]: number[]
    } = {}
    for(let k in data) {
      const item = data[k]
      // times.push(k)
      times.push(moment(Number(k)).format('MM-DD HH:mm'))
      item.forEach(innerItem => {
        const { title, count } = innerItem
        if (!courseNames.includes(title)) {
          courseNames.push(title)
        }
        if (!tempData[title]) {
          tempData[title] = []
        }
        tempData[title].push(count || Math.ceil(Math.random() * 100))
      })
    }
    const finalData: LineData[] = []
    for(let i in tempData) {
      finalData.push({
        name: i,
        type: 'line',
        data: tempData[i]
      })
    }
    console.log(finalData)
    return{
      title: {
        text: '课程在线学习人数'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: courseNames
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: times
      },
      yAxis: {
          type: 'value'
      },
      series: finalData
    }
  }
  render() {
    const { isLogin, isLoaded } = this.state
    if (isLogin) {
      if (isLoaded) {
        return (
          <div className="home-page">
            <div className="buttons">
              <Button
                type="primary"
                onClick={this.handleCrawlerClick.bind(this)}
              >爬取</Button>
              <Button
                type="primary"
                onClick={this.handleShowClick.bind(this)}
              >展示</Button>
              <Button
                type="primary"
                onClick={this.handleLogoutClick.bind(this)}
              >退出</Button>
            </div>
            <ReactEcharts option={this.getOption()} />
          </div>
        )
      } else {
        return null
      }
    }
    return <Redirect to="/login" />
  }
}