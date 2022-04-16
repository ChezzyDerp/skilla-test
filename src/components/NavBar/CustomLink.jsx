const { useResolvedPath, useMatch, Link } = require("react-router-dom");

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{
            borderLeft: match ? "2px solid #005FF8" :null,
            backgroundColor: match ? "#D8E4FB52" : null,
            opacity: match ? null: 0.6,
            width:"100%"
           
          }}
          to={to}
          {...props}
        >
          {children}
          {match ? <div style={{
            background: "#FFD500",
            boxShadow: "0px 3px 8px rgba(237, 218, 1, 0.5)",
            width: "10px",
            height:"10px",
            borderRadius:"50%",
            marginLeft:"auto"            
          }}></div> : null}
        </Link>
        
      </div>
    );
}

export default CustomLink