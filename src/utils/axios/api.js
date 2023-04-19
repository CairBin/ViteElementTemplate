import request from './request'

//Please refer to README.md
export class MyService{
    static async getTest(params) {
        return request.getReq('/apiSer/api/Test/testGet',params)
    }
}