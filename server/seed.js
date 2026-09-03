import mongoose from "mongoose";
import dotenv from "dotenv";
import MachineCheck from "./models/MachineCheck.js";
import dns from "node:dns";
import RequiredTool from "./models/RequiredTool.js";
import WorkpieceSetup from "./models/WorkpieceSetup.js";

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

const workpiece = [
  {
    id: "Fixture",
    label : "Fixture",
    value : "Machine Vise",
    status: "PENDING",
  },
  {
    id: "orientation",
    label: "orientation",
    value: "Datum A facing opertor",
    status: "PENDING",
  },
  {
    id: "clamping",
    label: "clamping",
    value: "Clamp workpiece firmly and verify seating",
    status: "PENDING",
  },
  {
    id: "material",
    label: "material",
    value: "Aluminium 6061 ",
    status: "PENDING",
  },
  {
    id: "drawingRevision",
    label: "drawingRevision",
    value: "REV B",
    status: "PENDING",
  },
  {
    id: "workOffset",
    label: "workOffset",
    value: "G54",
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

await WorkpieceSetup.deleteMany();
await WorkpieceSetup.insertMany(workpiece);

console.log("Workpiece are preloaded.")

await mongoose.disconnect();