import mongoose from "mongoose";
import dotenv from "dotenv";
import MachineCheck from "./models/MachineCheck.js";
import dns from "node:dns";
import RequiredTool from "./models/RequiredTool.js";
import WorkpieceSetup from "./models/WorkpieceSetup.js";
import ReadyReview from "./models/ReadyReview.js";

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
    toolNumber: "T01",
    toolType: "10 mm Flat End Mill",
    programRevision: "Rev A",
    status: "PENDING",
  },
  {
    toolNumber: "T02",
    toolType: "6 mm Flat End Mill",
    programRevision: "Rev A",
    status: "PENDING",
  },
  {
    toolNumber: "T03",
    toolType: "8 mm Drill",
    programRevision: "Rev A",
    status: "PENDING",
  },
  {
    toolNumber: "T04",
    toolType: "10 mm Spot Drill",
    programRevision: "Rev A",
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

const reviewItems = [
    {
        id: "machine",
        label: "Machine",
        value: "All Machine Checks are confirmed",
    },
    {
        id: "tools",
        label: "Tools",
        value: "All the required tools are inserted and confirmed",
    },
    {
        id: "workpiece",
        label: "Workpiece",
        value: "All the workpiece setup are confirmed"
    },
]

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

await ReadyReview.deleteMany();
await ReadyReview.insertMany(reviewItems);
console.log("Review Items are preloaded.")

await mongoose.disconnect();