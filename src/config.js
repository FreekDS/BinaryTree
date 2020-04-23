export const options = {
    layout: {
        hierarchical: {
            direction: 'UD',
            nodeSpacing: 150,
            sortMethod : 'directed'
        }
    },
    edges: {
        color: "#000000",
        width: 2
    },
    nodes: {
        shape: "ellipse"
    },
    interaction: {
        dragNodes: false,
        dragView: true,
        zoomView: true
    },
    height: "800px",
    physics: {
        enabled: false
    }
};

