export interface HistoryItem {
  year: string;
  event: string;
}

export interface Specifications {
  manufacturer: string;
  model: string;
  performance: string;
  powerConsumption: string;
  dimensions: string;
  compatibility: string;
}

export interface PartData {
  name: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  history: HistoryItem[];
  specifications: Specifications;
}

export const partData: Record<string, PartData> = {
  cpu: {
    name: "CPU",
    description: "Central Processing Unit",
    overview: "The CPU is the brain of the computer, executing instructions and performing calculations.",
    keyFeatures: [
      "High-speed instruction execution",
      "Multi-core architecture for parallel processing",
      "Advanced cache system for quick data access",
      "Integrated graphics processing capabilities",
    ],
    history: [
      { year: "1971", event: "Intel 4004: First commercially available microprocessor" },
      { year: "1978", event: "Intel 8086: Introduction of x86 architecture" },
      { year: "1993", event: "Intel Pentium: Superscalar architecture" },
      { year: "2005", event: "AMD Athlon 64 X2: First x86 dual-core processor" },
      { year: "2017", event: "AMD Ryzen: High core count consumer CPUs" },
    ],
    specifications: {
      manufacturer: "Intel",
      model: "Core i9-11900K",
      performance: "5.3 GHz",
      powerConsumption: "125W",
      dimensions: "37.5mm x 37.5mm",
      compatibility: "LGA 1200 socket",
    },
  },
  gpu: {
    name: "GPU",
    description: "Graphics Processing Unit",
    overview: "The GPU is essential for rendering images, animations, and video for display on a computer screen. It offloads graphical processing tasks from the CPU, enabling smoother performance in gaming, video editing, and graphic design applications.",
    keyFeatures: [
      "High-performance parallel processing capabilities",
      "Advanced rendering technologies, including real-time ray tracing",
      "Dedicated memory (VRAM) for efficient data handling",
      "Support for multiple display outputs and resolutions",
    ],
    history: [
      { year: "1981", event: "IBM PC with Monochrome Display Adapter" },
      { year: "1999", event: "NVIDIA GeForce 256: First GPU" },
      { year: "2006", event: "NVIDIA GeForce 8800 GTX: Unified shader architecture" },
      { year: "2018", event: "NVIDIA RTX 2080: Real-time ray tracing" },
      { year: "2020", event: "AMD Big Navi: RDNA 2 architecture" },
    ],
    specifications: {
      manufacturer: "NVIDIA",
      model: "GeForce RTX 3080",
      performance: "1.71 GHz",
      powerConsumption: "320W",
      dimensions: "285mm x 112mm",
      compatibility: "PCIe 4.0 x16",
    },
  },
  ram: {
    name: "RAM",
    description: "Random Access Memory",
    overview: "RAM provides fast, temporary storage for data that the CPU needs to access quickly.",
    keyFeatures: [
      "High-speed data access for improved system performance",
      "Temporary storage for active programs and data",
      "Dual-channel and quad-channel configurations for increased bandwidth",
      "Error-correcting code (ECC) support in some models",
    ],
    history: [
      { year: "1947", event: "Williams tube: First random-access computer memory" },
      { year: "1968", event: "Dynamic RAM (DRAM) invented" },
      { year: "1976", event: "16K DRAM chip introduced" },
      { year: "1996", event: "SDRAM becomes widely used" },
      { year: "2007", event: "DDR3 SDRAM introduced" },
    ],
    specifications: {
      manufacturer: "Corsair",
      model: "Vengeance LPX",
      performance: "3200 MHz",
      powerConsumption: "1.35V",
      dimensions: "133.35mm x 31.25mm",
      compatibility: "DDR4",
    },
  },
  harddrive: {
    name: "Hard Drive",
    description: "Solid State Drive",
    overview: "The hard drive serves as the primary storage device for a computer, where all data, applications, and the operating system are stored. It is crucial for data retrieval and overall system performance.",
    keyFeatures: [
      "High-capacity storage for long-term data retention",
      "Fast read and write speeds for quick data access",
      "No moving parts, resulting in improved reliability and durability",
      "Lower power consumption compared to traditional hard disk drives",
    ],
    history: [
      { year: "1991", event: "SanDisk Corporation creates first SSD" },
      { year: "1995", event: "M-Systems introduces Flash-based SSD" },
      { year: "2006", event: "Samsung launches first consumer SSD" },
      { year: "2013", event: "Samsung introduces 3D NAND flash" },
      { year: "2015", event: "NVMe becomes widely adopted" },
    ],
    specifications: {
      manufacturer: "Samsung",
      model: "970 EVO Plus",
      performance: "3,500 MB/s read, 3,300 MB/s write",
      powerConsumption: "6W (average)",
      dimensions: "80.15mm x 22.15mm",
      compatibility: "NVMe, PCIe Gen 3.0 x4",
    },
  },
  motherboard: {
    name: "Motherboard",
    description: "Main Circuit Board",
    overview: "The motherboard is a critical component of any computing system, acting as the central hub that connects all other parts of the computer. It enables communication between the CPU, RAM, storage devices, and peripheral components, ensuring the system operates efficiently.",
    keyFeatures: [
      "Multiple expansion slots for adding components (PCIe, M.2)",
      "Integrated audio and networking capabilities",
      "BIOS/UEFI for system configuration and management",
      "Support for various CPU sockets and RAM types",
    ],
    history: [
      { year: "1981", event: "IBM PC: First standardized motherboard" },
      { year: "1984", event: "IBM AT: Introduction of 16-bit ISA bus" },
      { year: "1995", event: "Intel P6: ATX form factor introduced" },
      { year: "2003", event: "PCI Express introduced" },
      { year: "2008", event: "Intel X58: First motherboard with QPI" },
    ],
    specifications: {
      manufacturer: "ASUS",
      model: "ROG Maximus XIII Hero",
      performance: "PCIe 4.0, DDR4 5333MHz (OC)",
      powerConsumption: "Varies",
      dimensions: "305mm x 244mm",
      compatibility: "ATX, LGA 1200 socket",
    },
  },
}