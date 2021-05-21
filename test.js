var CRT_288_K001 = require('crt-288-k001-heay').CRT_288_K001;
var CRT_288_K001_errors = require('crt-288-k001-heay').Errors;


let CardReader = new CRT_288_K001(false);//true - for emulate real device
CardReader.on('log', (log) =>console.log('log: ', log));//Handle inner logs
CardReader.safeCardRead(function (err, res) {//callback calls after card pull out from reader
    console.log('safeCardRead result', err, res);//res contain all info about card
});
/*
    Possible errors:
    {
        internal_error: "Internal error",
        parameter_error: "Parameter Error",
        upload_error_data: "Upload error data",
        upload_timeout: "Upload timeout",
        upload_cancel: "Upload cancel",
        execution_error: "Execution error"
    }
*/