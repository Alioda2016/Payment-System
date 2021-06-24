import { AlignmentType, Bookmark, Document, HeadingLevel, Packer, Paragraph, TabStopPosition,
  TabStopType, TextRun } from "docx";
import { Contract, Payment } from "src/app/shared/models/contract";
import { File,  StyleLevel, TableOfContents } from "docx";

export class DocumentCreator {

  public create(row:Payment, contract: Contract) {
    const doc = new Document({
      sections: [
        {children: [
          new Paragraph({
            spacing: {
              after: 120,
            },
              text: "بسم الله الرحمن الرحيم",
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({
              spacing: {
                after: 120,
              },
              tabStops: [
                {
                    type: TabStopType.RIGHT,
                    position: TabStopPosition.MAX,
                },
              ],
              alignment: AlignmentType.RIGHT,
              children: [new TextRun({
                text: "تقرير ( المهندس )",
                size: 25,
              })]
            }),
            new Paragraph({
              spacing: {
                after: 120,
              },
              alignment: AlignmentType.RIGHT,
              tabStops: [
                  {
                      type: TabStopType.RIGHT,
                      position: TabStopPosition.MAX,
                  },
              ],
              children: [
                new TextRun({
                  text: " -: رقم",
                  size: 25,
                }),
                new TextRun({
                  text: `\t${contract.contractEndDate}`,
                  size: 25,
                }),
                new TextRun({
                  text: " : بتاريخ",
                  size: 25,
                }),
              ],
          }),
          new Paragraph({
            spacing: {
              after: 120,
            },
            alignment: AlignmentType.RIGHT,
              tabStops: [
                  {
                      type: TabStopType.RIGHT,
                      position: TabStopPosition.MAX,
                  },
              ],
            children: [
              new TextRun({
                text: `\t${contract.contractNumber}`,
                size: 25,
              }),
              new TextRun({
                text: " : رقم العقد",
                size: 25,
              }),
            ]
          }),
          new Paragraph({
            spacing: {
              after: 120,
            },
            alignment: AlignmentType.RIGHT,
              tabStops: [
                  {
                      type: TabStopType.RIGHT,
                      position: TabStopPosition.MAX,
                  },
              ],
            children: [
              new TextRun({
                text: `\t${contract.contractClass}`,
                size: 25,
              }),
              new TextRun({
                text: " : موضوع العقد",
                size: 25,
              }),
            ]
          })
        ]}
      ]
    });
  return doc;
  }
}
