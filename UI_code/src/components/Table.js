import React, {Component}  from 'react';
import './Table.css'


export class Table extends Component{
    render(){
        return(
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Starter</th>
      <th scope="col">Professional</th>
      <th scope="col">Orgnization</th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col"><span><img id='img_dollar' src="https://img.icons8.com/material/15/000000/us-dollar--v1.png"/></span><h1>0</h1></th>
      <th scope="col"><span ><img id='img_dollar' src="https://img.icons8.com/material/15/000000/us-dollar.png"/></span><h1>25</h1></th>
      <th scope="col"><span ><img id='img_dollar' src="https://img.icons8.com/material/15/000000/us-dollar.png"/></span><h1>50</h1></th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col"><span id='txt_pupm'>Per user, per month</span></th>
      <th scope="col"><span id='txt_pupm'>Per user, per month</span></th>
      <th scope="col"><span id='txt_pupm'>Per user, per month</span></th>
    </tr>
    <tr>
      <th scope="col"><h2>Features</h2></th>
      <th scope="col"><button type="button" class="btn btn-outline-info" id="btn_buy1"><span id="btn_txt">Go Starter</span></button></th>
      <th scope="col"><button type="button" class="btn btn-outline-info" id="btn_buy"><span id="btn_txt">Go Professional</span></button></th>
      <th scope="col"><button type="button" class="btn btn-outline-info" id="btn_buy"><span id="btn_txt">Go Orgnization</span> </button></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Centralized teams</th>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
    </tr>
    <tr>
      <th scope="row">Version histroy</th>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
    </tr>
    <tr>
      <th scope="row">Plugin adminstration</th>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
    </tr>
    <tr>
      <th scope="row">Facebook & Instagram Ads</th>
      <td><img src="https://img.icons8.com/color/48/26e07f/cancel--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
    </tr>
    <tr>
      <th scope="row">Design & System Anlytics</th>
      <td><img src="https://img.icons8.com/color/48/26e07f/cancel--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/cancel--v1.png"/></td>
      <td><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
    </tr>
    <tr>
      <th scope="row" id="last_row">Unlimited cloud storage</th>
      <td id="last_row"><img src="https://img.icons8.com/color/48/26e07f/cancel--v1.png"/></td>
      <td id="last_row"><img src="https://img.icons8.com/color/48/26e07f/cancel--v1.png"/></td>
      <td id="last_row"><img src="https://img.icons8.com/color/48/26e07f/checked--v1.png"/></td>
    </tr>

  </tbody>
</table>
        )
    }
}