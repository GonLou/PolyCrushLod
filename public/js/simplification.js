function EdgeCollapseTarget() {
    var ei = ListEdge();
    var cost;
    var optimalCoord[3];
    var id;

    //EdgeCollapseTarget(){}
    function EdgeCollapseTarget(ei_in, cost_in, optimalCoord_in, id_in) {
        ei   = ei_in;
        cost = cost_in;
        for(var i = 0; i < 3; i++) optimalCoord[i] = optimalCoord_in[i];
        id   = id_in;
    };
};

function VertexSplitTarget {

    var ei = ListEdge();
    var v1OrginalCoord[3];
    var v1OriginalIsBoundary;
    var halfedgesAroundV0 = HalfEdge();

    var id;

    //VertexSplitTarget(){}
};


class Simplification {
    var mesh = Mesh();

    var priority_queue <EdgeCollapseTarget, deque<EdgeCollapseTarget>, greater<EdgeCollapseTarget>> heap;
    var list<EdgeCollapseTarget> suspendedEdgeCollapseTarget;

    var stack<VertexSplitTarget>  vertexSplitTarget;
    var stack<EdgeCollapseTarget> readdedEdgeCollapseTarget;

    var ect_id_base;
    var n_active_faces;

    function AssignInitialQ();
    function CumulateQ(vi, normal, d);
    function ComputeOptimalCoordAndCost(ei);
    
    var FindBoundaryEdgeIncidentToVertexInCW(baseHalfEdge) = HalfEdge();
    function FindNeighborHalfEdge(v1, facesOriginallyIncidentToV0OrV1);

    boolean IsFinWillNotBeCreated(ei);
    function RemoveEdge(ei, optimalCoord, isFirstCollapse);

    function Simplification(){ ect_id_base = 0; }

    var InitSimplification(mesh_in);
    var EdgeCollapse();
    var VertexSplit();
    var ControlLevelOfDetail(step);
};
