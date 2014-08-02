var perceptron = function (inputs, weights, bias) {
    var sum = 0;
    var len = inputs.length;
    for (var i = 0; i < len; i++) {
	sum += inputs[i] * weights[i];
    }
    if ((sum + bias) >= 1) {
	return 1;
    }
    return 0;
};

// adderPerceptron wraps perceptron with
// weights for a NAND gate.
var adderPerceptron = function (i, j) {
    var bias = 3;
    var weights = [-2, -2];

    return perceptron([i, j], weights, bias);
};

var adder = function (inputOne, inputTwo) {
    var layerOneOut = adderPerceptron(inputOne, inputTwo);

    // Two hidden layers.
    var layerTwoFirst = adderPerceptron(layerOneOut, inputOne);
    var layerTwoSecond = adderPerceptron(layerOneOut, inputTwo);

    var carryBit = adderPerceptron(layerOneOut, layerOneOut);

    return {
	'value': adderPerceptron(layerTwoFirst, layerTwoSecond),
	'carry': carryBit
	};
};
