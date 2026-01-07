import { motion } from "framer-motion";

export const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-lg aspect-square">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          className="stroke-primary/20"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Inner circles */}
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          className="stroke-primary/30"
          strokeWidth="1"
          strokeDasharray="8 8"
          fill="none"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          className="stroke-primary/40"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Network nodes */}
        {[
          { cx: 200, cy: 60, delay: 0.2 },
          { cx: 320, cy: 140, delay: 0.4 },
          { cx: 320, cy: 260, delay: 0.6 },
          { cx: 200, cy: 340, delay: 0.8 },
          { cx: 80, cy: 260, delay: 1.0 },
          { cx: 80, cy: 140, delay: 1.2 },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              className="fill-primary/20 stroke-primary"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: node.delay }}
            />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="4"
              className="fill-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: node.delay + 0.2 }}
            />
          </motion.g>
        ))}

        {/* Connection lines */}
        {[
          { x1: 200, y1: 72, x2: 200, y2: 200 },
          { x1: 308, y1: 148, x2: 200, y2: 200 },
          { x1: 308, y1: 252, x2: 200, y2: 200 },
          { x1: 200, y1: 328, x2: 200, y2: 200 },
          { x1: 92, y1: 252, x2: 200, y2: 200 },
          { x1: 92, y1: 148, x2: 200, y2: 200 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            className="stroke-primary/40"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Center hub */}
        <motion.circle
          cx="200"
          cy="200"
          r="30"
          className="fill-card stroke-primary"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        
        {/* Center icon - Router/Network symbol */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <rect x="188" y="192" width="24" height="16" rx="2" className="fill-primary" />
          <circle cx="193" cy="200" r="2" className="fill-background" />
          <circle cx="200" cy="200" r="2" className="fill-background" />
          <circle cx="207" cy="200" r="2" className="fill-background" />
        </motion.g>

        {/* Camera icon at top node */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <rect x="190" y="50" width="20" height="14" rx="2" className="fill-primary/80" />
          <circle cx="200" cy="57" r="4" className="stroke-background" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Wi-Fi icon at right node */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <path d="M312 134 C318 138 318 142 312 146" className="stroke-primary/80" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M316 130 C326 138 326 142 316 150" className="stroke-primary/60" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="320" cy="145" r="2" className="fill-primary" />
        </motion.g>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2"
            className="fill-primary/60"
            initial={{ 
              cx: 200 + Math.cos(i * Math.PI / 4) * 160,
              cy: 200 + Math.sin(i * Math.PI / 4) * 160,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
};
