import tree_util from 'tree-util'

// Config object to set the id properties for the parent child relation
const standardConfig =  { id : 'id', parentid : 'parentId'};
let codeArr = []
export default function processNodeData(nodes) {
   const nodesData = nodes.map((node) => node.data)
   codeArr = []
    // Creates an array of trees. For this example there will by only one tree
    let trees = tree_util.buildTrees(nodesData, standardConfig);
    let tree = trees[0].rootNode;
    dfs( tree, "");

    codeArr.forEach(row => console.log(row))
    return codeArr;
}

function dfs(tree, space) {
    if (tree == undefined) {
        return
    }
    codeGenerator(tree.dataObj, space)
    if(tree.dataObj.type == 'Agama-when-Node' || tree.dataObj.type == 'Agama-repeat-Node') {
        space = space + "\t"
    }
    dfs(tree.children[0], space)
    dfs(tree.children[1], "")
}

function codeGenerator(tree, space) {
   //console.log(JSON.stringify(node))
    if(tree.agamaData.type == 'Agama-start-Flow' ) {
        codeArr.push(space + "Flow " + tree.agamaData.flowname)
        codeArr.push(space + "  Basepath " + tree.agamaData.basepath)
    }

    if(tree.agamaData.type == 'Agama-trigger-Node' ) {
       codeArr.push(space + tree.agamaData.asssignedVariableName + " = " +"Trigger " + tree.agamaData.flowFileName)
    }

    if(tree.agamaData.type == 'Agama-when-Node' ) {
       codeArr.push(space + "When " +tree.agamaData.whenVariable+ " is " +tree.agamaData.whenValue)
    }

    if(tree.agamaData.type == 'Agama-finish-Flow' ) {
       codeArr.push(space + "Finish " + tree.agamaData.returnVariable)
    }

    if(tree.agamaData.type == 'assignment' ) {
       codeArr.push(space + tree.agamaData.assignedVariableName + " = " + tree.agamaData.assignedValue)
    }

    if(tree.agamaData.type == 'Agama-call-Node' ) {
       codeArr.push(space + tree.agamaData.asssignedVariableName + " = " +"Call " + tree.agamaData.javaMethodName + " " +tree.agamaData.params)
    }

    if(tree.agamaData.type == 'Agama-rrf-Node' ) {
       codeArr.push(space + tree.agamaData.asssignedVariableName + " = " +"RRF " + "'" + tree.agamaData.templateName+ "'" + " " +tree.agamaData.params)
    }

    if(tree.agamaData.type == 'Agama-repeat-Node' ) {
       codeArr.push(space + "Repeat " + tree.agamaData.maxIteration + " times max")
    }

    if(tree.agamaData.type == 'Agama-log-Node' ) {
      codeArr.push(space + "Log " + tree.agamaData.logMessage)
   }

}
