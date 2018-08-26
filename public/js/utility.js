//matrix = CrossProduct(x.toArray(), y.toArray())
function CrossProduct(a, b)
{
    c[0] = a[1] * b[2] - a[2] * b[1];
    c[1] = a[2] * b[0] - a[0] * b[2];
    c[2] = a[0] * b[1] - a[1] * b[0];
	return c;
}

function DotProduct(a, b)
{
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
}

function DotProduct4D(a, b)
{
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2] + a[3]*b[3];
}

function GetArea(normal)
{
    return area = 0.5 * Math.sqrt(normal[0]*normal[0] + normal[1]*normal[1] + normal[2]*normal[2]);
}


function GetDistance(a, b)
{
    return Math.sqrt( pow(a[0]-b[0], 2.0) + pow(a[1]-b[1], 2.0) + pow(a[2]-b[2], 2.0) ); 
}

function GetLength(a)
{
    return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]); 
}

function Normalize(a)
{
    var length = Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);

    if(!length) return;

    var inv_length = 1.0/length;

    a[0] *= inv_length;
    a[1] *= inv_length;
    a[2] *= inv_length;
	return a;
}

function Swap(a, b) {
  return [b, a]
}

/*
function SolveLinearSystem(double (*matrix)[4], double *rhs, double *solution)
{  
    // perform gaussian elimination

    for(int i = 0; i <= 3; i++){
        double maxAbsoluteValue = -1.0;
        int    pivot_index;

        // choose maximum "matrix[j][i]" as a pivot
        for(int j = i; j <= 3; j++){
            if(fabs(matrix[j][i]) > maxAbsoluteValue){
                maxAbsoluteValue = fabs(matrix[j][i]);
                pivot_index      = j;
            }
        }

        // matrix is singular
        if(maxAbsoluteValue < 1.0e-6) return false;

        for(int j = i; j <= 3; j++) Swap(matrix[i][j], matrix[pivot_index][j]);
        Swap(rhs[i], rhs[pivot_index]);

        double scale = 1.0 / matrix[i][i];

        for(int j = i+1; j <= 3; j++){
            double pivot = -matrix[j][i]*scale;

            for(int k = 0;   k <= i; k++) matrix[j][k] = 0.0;
            for(int k = i+1; k <= 3; k++){
                if(fabs(matrix[i][k]) > 1.0e-6)
                    matrix[j][k] += matrix[i][k] * pivot;
                else
                    break;
            }

            rhs[j] += rhs[i] * pivot;
        }
    }

    for(int i = 3; i >= 0; i--){  
        solution[i] = 0.0;
        for(int j = i+1; j <= 3; j++) solution[i] += solution[j]*matrix[i][j];

        solution[i] = (rhs[i]-solution[i])/matrix[i][i];
    }


    return true;
}*/