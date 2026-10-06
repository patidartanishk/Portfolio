export default function handler(req, res) {
  res.status(200).json({
    name: "Tanishk Patidar",
    role: "Full-Stack Developer",
    status: "Active",
  });
}
