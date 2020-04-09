class BaseResponse{
    constructor({
        args={},
        code="200", 
        message="Valid request", 
        status="Success"}){
        this.response = {
            code,
            message,
            status,
            ...args
        }
        return this.response
    }
}
module.exports = BaseResponse;