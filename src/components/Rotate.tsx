import * as motion from "motion/react-client";


const box = {
  width: 100,
  height: 100,
  backgroundColor: "var(--hue-1)",
  borderRadius: 5,
};

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "var(--hue-2)",
    borderRadius: "50%",
}

export default function Rotate() {
  return (
    <div>

    
    <motion.div
      style={box}
      animate={{ rotate: 360 }}
      transition={{ duration: 10 }}
      aria-label="Rotating animation"
    />

    <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
        />
    </div>
  );
}
