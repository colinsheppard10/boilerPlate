import { Router } from "express";

const router = Router();

router.post("/test", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "public test",
    });
  } catch (error) {
    return res.status(504).send({ error });
  }
});

export default router;
