import React from "react"

const Theme = () => {
  const initialMode =
    typeof window !== "undefined"
      ? localStorage === undefined
        ? "light"
        : localStorage.getItem("jlmode")
      : "light"
  const [mode, setMode] = React.useState(initialMode)

  React.useEffect(() => {
    if ((mode === null) | (mode === undefined)) {
      setMode("light")
      localStorage.setItem("jlmode", "light")
    }
    if (mode === "dark" && typeof window !== "undefined") {
      localStorage.setItem("jlmode", "dark")
      document.body.classList.remove("light")
      document.body.classList.add(mode)
    } else if (mode === "light" && typeof window !== "undefined") {
      localStorage.setItem("jlmode", "light")
      document.body.classList.remove("dark")
      document.body.classList.add(mode)
    }
  }, [mode])
  const handleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light")
  }
  return (
    <button
      className="darkMode-btn"
      onClick={handleMode}
      title={`Activate ${mode} Mode`}
    >
      {mode === "dark" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          style={{ transform: "rotate(35deg)" }}
        >
          <mask id="moon-mask-eoww">
            <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
            <circle cx="10" cy="2" r="8" fill="black"></circle>
          </mask>
          <circle
            cx="9"
            cy="9"
            fill="#fcfc00"
            mask="url(#moon-mask-eoww)"
            r="8"
          ></circle>
          <g>
            <circle
              cx="17"
              cy="9"
              r="1.5"
              fill="#fcfc00"
              style={{
                transform: "scale(0)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="13"
              cy="15.928203230275509"
              r="1.5"
              fill="#fcfc00"
              style={{
                transform: "scale(0)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="5.000000000000002"
              cy="15.92820323027551"
              r="1.5"
              fill="#fcfc00"
              style={{
                transform: "scale(0)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="1"
              cy="9.000000000000002"
              r="1.5"
              fill="#fcfc00"
              style={{
                transform: "scale(0)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="4.9999999999999964"
              cy="2.071796769724492"
              r="1.5"
              fill="#fcfc00"
              style={{
                transform: "scale(0)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="13"
              cy="2.0717967697244912"
              r="1.5"
              fill="#fcfc00"
              style={{
                transform: "scale(0)",
                transformOrigin: "center center",
              }}
            ></circle>
          </g>
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 19"
          style={{ transform: "rotate(90deg)" }}
        >
          <mask id="moon-mask-eoww">
            <rect x="0" y="0" width="18" height="29" fill="#FFF"></rect>
            <circle cx="25" cy="0" r="8" fill="black"></circle>
          </mask>
          <circle
            cx="9"
            cy="9"
            fill="#7c96ff"
            mask="url(#moon-mask-eoww)"
            r="5"
          ></circle>
          <g>
            <circle
              cx="17"
              cy="9"
              r="1.5"
              fill="#7c96ff"
              style={{
                transform: "scale(1)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="13"
              cy="15.928203230275509"
              r="1.5"
              fill="#7c96ff"
              style={{
                transform: "scale(1)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="5.000000000000002"
              cy="15.92820323027551"
              r="1.5"
              fill="#7c96ff"
              style={{
                transform: "scale(1)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="1"
              cy="9.000000000000002"
              r="1.5"
              fill="#7c96ff"
              style={{
                transform: "scale(1)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="4.9999999999999964"
              cy="2.071796769724492"
              r="1.5"
              fill="#7c96ff"
              style={{
                transform: "scale(1)",
                transformOrigin: "center center",
              }}
            ></circle>
            <circle
              cx="13"
              cy="2.0717967697244912"
              r="1.5"
              fill="#7c96ff"
              style={{
                transform: "scale(1)",
                transformOrigin: "center center",
              }}
            ></circle>
          </g>
        </svg>
      )}
    </button>
  )
}

export default Theme
