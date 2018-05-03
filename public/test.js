
QUnit.test("node test", function (assert) {
    var node = new NodeObj("mul");
    assert.ok(node.value == "mul", "Passed!");
});

QUnit.test("node test2", function (assert) {
    var node = new NodeObj(1);
    assert.ok(node.getValue() == 1, "Passed!");
});

QUnit.test("add node test3", function (assert) {
    var node = new NodeObj("mul");
    var node2 = new NodeObj(1);
    var result = node.addChild(node2)
    assert.ok(result == true, "Passed!");
});

QUnit.test("add node test4", function (assert) {
    var node = new NodeObj("mul");
    var node2 = new NodeObj(1);
    node.addChild(node2)
    assert.ok(node.getChild()[0].getValue() == "1", "Passed!");
});

QUnit.test("add node test5", function (assert) {
    var node = new NodeObj("mul");
    var node2 = new NodeObj(1);
    var node3 = new NodeObj(2);
    node.addChild(node2)
    node.addChild(node3)
    assert.ok(node.getChild()[1].getValue() == "2", "Passed!");
});

QUnit.test("calculate node test5", function (assert) {
    var node = new NodeObj("sum");
    var node2 = new NodeObj(1);
    var node3 = new NodeObj(2);
    node.addChild(node2)
    node.addChild(node3)
    var value = node.calculate()
    assert.ok(value == "3", "Passed!");
});

QUnit.test("calculate node test5", function (assert) {
    var node = new NodeObj("mul");
    var node2 = new NodeObj(1);
    var node3 = new NodeObj(2);
    node.addChild(node2)
    node.addChild(node3)
    var value = node.calculate()
    assert.ok(value == "2", "Passed!");
});


QUnit.test("calculate node test5", function (assert) {
    var node = new NodeObj("mul");
    var node2 = new NodeObj(1);
    var node3 = new NodeObj(2);
    var node4 = new NodeObj("sum");
    var node5 = new NodeObj(2);
    var node6 = new NodeObj(4);
    node.addChild(node2)
    node.addChild(node3)
    node.addChild(node4)
    node4.addChild(node5);
    node4.addChild(node6);
    var value = node.calculate()
    assert.ok(value == "12", "Passed!");
});

QUnit.test("calculate node test6", function (assert) {
    var expression = "sum 2 mul 3"
    var token = expression.split(" ");
    var value = calculate(token);
    assert.ok(value == "5", "Passed!");
});

QUnit.test("calculate node test6", function (assert) {
    var expression = "sum 2 mul 3 2"
    var token = expression.split(" ");
    var value = calculate(token);
    assert.ok(value == "8", "Passed!");
});

QUnit.test("calculate node test6", function (assert) {
    var expression = "mul 5 sub 2 sum 7 2 9"
    var token = expression.split(" ");
    var value = calculate(token);
    assert.ok(value == "-80", "Passed!");
});
