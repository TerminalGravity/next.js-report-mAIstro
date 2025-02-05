export async function POST(req: Request) {
  const configUpdate = await req.json()
  
  if (configUpdate.plannerModel === "o3-mini" && !configUpdate.deepseekApiKey) {
    return NextResponse.json({ error: "DeepSeek API key required" }, { status: 400 })
  }

  if (configUpdate.writerModel?.includes("claude") && !configUpdate.anthropicApiKey) {
    return NextResponse.json({ error: "Anthropic API key required" }, { status: 400 })
  }
  
  // Save config
} 