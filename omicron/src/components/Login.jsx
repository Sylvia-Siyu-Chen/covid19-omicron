import React from "react"
import {Button, PageHeader, Card} from 'antd'
import '../Styles/Login.css'

require('bootstrap')

const Login = () =>{
    return(
      <div>
        <PageHeader
          className="site-page-header"
          title='Title'
          subTitle='Let us know more about you'/>
        <div className="site-card-border-less-wrapper">
        <Card className="card">
        <form>
          <div class="form-group">

            <div className="user_name">
              <label>Your Name:</label>
              <input type="text"></input>
            </div>

            <div className="university_email">
              <label for="university_email">University Email Address: </label>
              <input type="email" class="form-control" id="uni-email" placeholder="name@university.edu"/>
            </div>

            <div className="graduation_year">
              <label for="graduation">Please Select Your Year of Graduation: </label>
              <select class="form-control" id="graduation">
                <option>class of 2022</option>
                <option>class of 2023</option>
                <option>class of 2024</option>
                <option>class of 2025</option>
                <option>class of 2026</option>
              </select>
            </div>

            <div className="submit_button">
              <Button type='link'>submit</Button>
            </div>

            </div>
        </form>
        </Card>
        </div>
        </div>
    )
}

export default Login;