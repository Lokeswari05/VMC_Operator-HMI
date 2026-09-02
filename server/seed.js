import mongoose from "mongoose";
import dotenv from "dotenv";
import MachineCheck from "./models/MachineCheck.js";
import dns from "node:dns";

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

await mongoose.connect(process.env.MONGO_URI);

await MachineCheck.deleteMany();
await MachineCheck.insertMany(checks);

console.log("Machine checks preloaded");

await mongoose.disconnect();