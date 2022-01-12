// here we create global function

export const resStatus = (req, res, data, code = 200) => res.send({
	data,
	code,
	success: true,
});

// error function
export const resError = (req, res, data, code = 500) => res.send({
	data,
	code,
	success: false,
	// errorMessage: ,
});
