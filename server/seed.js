import mongoose from "mongoose";
import dotenv from "dotenv";
import MachineCheck from "./models/MachineCheck.js";
import dns from "node:dns";
import RequiredTool from "./models/RequiredTool.js";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const checks = [
  {
    id: "power",
    label: "Power/control available",
    status: "PENDING",
  },
  {
    id: "estop",
    label: "E-stop released",
    status: "PENDING",
  },
  {
    id: "guard",
    label: "Guard/door closed",
    status: "PENDING",
  },
  {
    id: "alarm",
    label: "No active alarm",
    status: "PENDING",
  },
  {
    id: "coolant",
    label: "Lubrication/coolant ready",
    status: "PENDING",
  },
  {
    id: "reference",
    label: "Reference return complete",
    status: "PENDING",
  },
];

const tools = [
    {
        id: "T01",
        label: "10 mm Flat End Mill",
        status: "PENDING",
    },
    {
        id: "T02",
        label: "6 mm Flat End Mill",
        status: "PENDING",
    },
    {
        id: "T03",
        label: "8 mm Drill",
        status: "PENDING",
    },
    {
        id: "T04",
        label: "10 mm Spot Drill",
        status: "PENDING",
    },
];

await mongoose.connect(process.env.MONGO_URI);

await MachineCheck.deleteMany();
await MachineCheck.insertMany(checks);

console.log("Machine checks preloaded");

await RequiredTool.deleteMany();
await RequiredTool.insertMany(tools);

console.log("All required tools are preloaded.");

await mongoose.disconnect();