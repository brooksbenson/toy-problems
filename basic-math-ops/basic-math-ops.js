//function should take 3 arguments: operator, left hand operand, right hand operand
//should return the result of the opperation

const basicOp = (op, op1, op2) => new Function(`return ${op1}${op}${op2}`)();