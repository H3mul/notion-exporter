import { NotionExporter } from './src/index';

const fetchEnv = (envName: string): string => {
  const variable = process.env[envName]?.trim()
  if (!variable) {
    throw new Error(`Missing ${envName}`)
  }
  return variable
}

async function main() {
  const NOTION_SPACE_ID = fetchEnv("NOTION_SPACE_ID");
  const OUTPUT_DIR = fetchEnv("OUTPUT_DIR");

  console.error("NOTION_SPACE_ID:", NOTION_SPACE_ID);
  console.error("OUTPUT_DIR:", OUTPUT_DIR);

  await new NotionExporter().getSpaceFiles(NOTION_SPACE_ID, OUTPUT_DIR);
  console.log("Export completed successfully!");
}

main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
