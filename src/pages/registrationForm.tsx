import { Container, Button, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import s from "@/styles/registrationForm.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";
import Link from "next/link";

const RegsitrationForm = () => {
  const [data,setData]=React.useState({});
  const handleSubmit=()=>{
    if(Object.keys(data).length===0){
      console.log("empty");
      toast('Please enter data', { autoClose: 2000, type: 'error' })    
    }else{
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://demo.metahos.com/api/module/marketing/marketing-activity/create',
  headers: { 
    'Accept': 'application/json, text/plain, */*', 
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibTE2bGFic2FkbWluIiwidHlwZSI6IlN1cGVyVXNlciIsImNvbnRhY3QiOiI5OTgwODczODAwIiwicHJvZmlsZVVSTCI6bnVsbCwic2lnbiI6Imh0dHBzOi8vbXl0ZWxlb3BkLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9zaWduLTE2ODA3ODAxNTM0NDkucG5nIiwiaWQiOiI2MTFjMGI4YWRjOGRhYjY1MjU0ZmQxMWUiLCJkZXBhcnRtZW50IjoiIiwicm9sZXMiOlt7ImRlZmF1bHRSb3V0ZSI6IndvcmtsaXN0L3NjaGVkdWxlZCIsIl9pZCI6IjYzMjFhNTA0YTQ2YjJjNzlmNmYwMWNiZiIsIm5hbWUiOiJUZXN0IFJvbGUiLCJkZXNjcmlwdGlvbiI6IiIsInBlcm1pc3Npb25zIjpbeyJhcHByb3ZhbE1ldGFEYXRhIjp7ImJlaGF2aW91ciI6Im5vX25lZWQiLCJub09mQXBwcm92YWxzTmVlZGVkIjoxfSwiX2lkIjoiNjMyMWE1MDRhNDZiMmM3OWY2ZjAxY2JkIiwia2V5Ijoic2V0dGxlX3JlZnVuZCJ9XSwiYWxsUGVybWlzc2lvbnNTZWxlY3RlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0wOS0xNFQwOTo1NToxNi41NjNaIiwiY3JlYXRlZEJ5Ijp7Il9pZCI6IjYzMjFhNTA0YTQ2YjJjNzlmNmYwMWNiZSIsIm5hbWUiOiJtMTZsYWJzYWRtaW4iLCJ1c2VySWQiOiI2MTFjMGI4YWRjOGRhYjY1MjU0ZmQxMWUiLCJ1c2VyVHlwZSI6IlN1cGVyVXNlciJ9LCJ1cGRhdGVkQXQiOiIyMDIyLTA5LTE0VDA5OjU1OjE2LjU2M1oiLCJfX3YiOjB9XSwic3RvcmVzIjpbXSwiaWF0IjoxNjg0MzM4NTAxLCJleHAiOjE2ODQ1MTEzMDF9.VAqDsdbuMShyGuR_AGB0DdPAcgqKsy7tOYCW8Xd6_X8', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/json;charset=UTF-8', 
    'Origin': 'https://demo.metahos.com', 
    'Referer': 'https://demo.metahos.com/marketing/marketing-activity/6464fedc6f6ad6339a947493', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'same-origin', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', 
    'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"'
  },
  data : `{"marketingCampId":"6464fedc6f6ad6339a947493","formId":"6464fe4b6f6ad6339a94745e","userId":"611c0b8adc8dab65254fd11e","response":{"results":${data},"scores":{},"createdAt":${new Date()}}}`
};

axios.request(config)
.then((response:any) => {
  console.log(JSON.stringify(response.data));
})
.catch((error:any) => {
  console.log(error);
});
    }
  }
  return (
    <div>
      <section style={{ paddingTop: "7rem" }}>
        <Container>
          <Header
            title="Online Registration Form"
            barColor="#f32d20"
            className={s.reg_header}
          />
          <form style={{ marginTop: "5rem" }}>
            <Row className="my-4">
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    Full name <span className="i-req">*</span>
                  </label>
                  <input className="i-input" placeholder="Enter First name"                     onChange={(e) => {
                      setData({...data,'first-name':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <input className="i-input" placeholder="Enter Middle name" onChange={(e) => {
                      setData({...data,'middle-name':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <input className="i-input" placeholder="Enter Last name" onChange={(e) => {
                      setData({...data,'last-name':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Designation</label>
                  <input className="i-input" onChange={(e) => {
                      setData({...data,'designation':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Affiliation</label>
                  <input className="i-input" onChange={(e) => {
                      setData({...data,'affiliation':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Email <span className="i-req">*</span>
                  </label>
                  <input className="i-input" onChange={(e) => {
                      setData({...data,'email':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Mobile Number <span className="i-req">*</span>
                  </label>
                  <input className="i-input" placeholder="Enter Mobile no." onChange={(e) => {
                      setData({...data,'mobile':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <label className="i-label">
                    Address of Correspondence <span className="i-req">*</span>
                  </label>
                  <textarea className="i-input" style={{ minHeight: "7rem" }} onChange={(e) => {
                      setData({...data,'address':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    State <span className="i-req"></span>
                  </label>
                  <input className="i-input" placeholder="Enter State" onChange={(e) => {
                      setData({...data,'state':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">Country</label>
                  <input className="i-input" placeholder="Enter Country" onChange={(e) => {
                      setData({...data,'country':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={4}>
                <div className="i-control">
                  <label className="i-label">
                    PinCode* <span className="i-req"></span>
                  </label>
                  <input className="i-input" placeholder="Enter Pincode" onChange={(e) => {
                      setData({...data,'pincode':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12}>
                <div className="i-control">
                  <label className="i-label">
                    Details of payment of registration fee
                  </label>
                  <input className="i-input" onChange={(e) => {
                      setData({...data,'payment-details':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">
                    Bank name <span className="i-req"></span>
                  </label>
                  <input className="i-input" onChange={(e) => {
                      setData({...data,'bank':e.target.value});
                    }}/>
                </div>
              </Col>
              <Col sm={6}>
                <div className="i-control">
                  <label className="i-label">Mode of payment</label>
                  <input className="i-input" onChange={(e) => {
                      setData({...data,'payment-mode':e.target.value});
                    }}/>
                </div>
              </Col>
            </Row>
          </form>
          <div className=" d-flex align-items-center justify-content-center">
            <Button onClick={handleSubmit} className={`${s.btn}`}>Continue</Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RegsitrationForm;
