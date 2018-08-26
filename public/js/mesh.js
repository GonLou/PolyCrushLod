// typedef list<Vertex>::iterator  VertexIter;
function ListVertex() {
	var list = [];
	
	function Add(lv) {
		var listLength = list.length;
		
		list[listLength] = lv;
	};
};

function ListFace() {
	var list = [];
	
	function Add(lf) {
		var listLength = list.length;
		
		list[listLength] = lf;
	};
};

function ListEdge() {
	var list = [];
	
	function Add(le) {
		var listLength = list.length;
		
		list[listLength] = le;
	};
};

function HalfEdge() {
	var next = HalfEdge();
	var prev = HalfEdge();
	var mate = HalfEdge();

    var vertex = ListVertex();
    var face = ListFace();
    var edge = ListEdge();

    function HalfEdge(){
        next = prev = null;
        mate = null;
    };
};

function Edge() {
    var halfedge[2] = HalfEdge(); // if boundary edge, halfedge[1] == NULL
    var id;

    var ect_id; // id of corresponding "EdgeCollapseTarget"

    var isActive;

    //Edge(){}
    function Edge(he0, he1, n){
        halfedge[0] = he0; 
        halfedge[1] = he1;
        id = n;
        isActive = true;
    };
};


function Vertex() {
    var coord[3];
    var normal[3];
    var id;
    // pointer to one of the halfedges incident to this vertex
    var neighborHe = HalfEdge();

    var isBoundary;
    var isActive;

    var Q[10];

    //Vertex(){};
    function Vertex(coord_in, n){
        for(int i=0; i<3; i++) coord[i] = coord_in[i];
        id = n;
        neighborHe = null;
        isBoundary = false;
        isActive = true;
    };
};


function Face() {
    //VertexIter vertex[3];
    var halfedge[3] = HalfEdge(); // circular list ex) halfedge[0].next == halfedge[1]

    var normal[3];
    var area;
    var id;

    var isActive;

    //Face(){}
    function Face(v0, v1, v2, n){
        halfedge[0].vertex = v0;
        halfedge[1].vertex = v1;
        halfedge[2].vertex = v2;
        id = n;
        isActive = true;
    };
};


class Mesh {

    boolean ReadOFFFile(char *filename);
    function AddEdgeInfo();
    function MakeCircularList(fi);

    var vertices = ListVertex();
    var faces = ListFace();
    var edges = ListEdge();

    var n_vertices, n_faces, n_edges;


    function Mesh(){
        n_vertices = n_faces = n_edges = 0;
    };

    boolean ConstructMeshDataStructure(filename);
    function AssignFaceNormal(fi);
    function AssignVertexNormal(vi);
    function Display(mode);

    //void Picking(int& x, int& y);
};