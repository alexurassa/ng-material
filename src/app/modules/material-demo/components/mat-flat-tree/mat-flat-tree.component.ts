import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface CourseNode {
  courseName: string;
  children?: CourseNode[];
}

interface FlatCourseNode {
  courseName: string;
  expandable: boolean;
  level: number;
}

@Component({
  selector: 'app-mat-flat-tree',
  templateUrl: './mat-flat-tree.component.html',
  styleUrls: ['./mat-flat-tree.component.css'],
})
export class MatFlatTreeComponent implements OnInit {
  // determines how the tree will expand/collapse
  flatCourseTreeControl = new FlatTreeControl<FlatCourseNode>(
    (flatCourseNode: FlatCourseNode) => flatCourseNode.level,
    (flatCourseNode: FlatCourseNode) => flatCourseNode.expandable
  );

  // treeFlattener
  courseTreeFlattener = new MatTreeFlattener<CourseNode, FlatCourseNode, FlatCourseNode>(
    (courseNode: CourseNode, level: number): FlatCourseNode => {
      return {
        courseName: courseNode.courseName,
        expandable: courseNode.children
          ? courseNode.children.length > 0
          : false,
        level,
      };
    },
    (flatCourseNode: FlatCourseNode) => flatCourseNode.level,
    (flatCourseNode: FlatCourseNode) => flatCourseNode.expandable,
    (courseNode: CourseNode) => courseNode.children
  );

  flatCourseTreeDataSource = new MatTreeFlatDataSource<CourseNode, FlatCourseNode, FlatCourseNode>(
    this.flatCourseTreeControl,
    this.courseTreeFlattener
  );


  public hasFlatChild = (index: number, flatCourseNode: FlatCourseNode) => flatCourseNode.expandable

  constructor() {}

  public ngOnInit(): void {
    this.flatCourseTreeDataSource.data = TREE_DATA;
  }
}

const TREE_DATA: CourseNode[] = [
  {
    courseName: 'Angular Material',
    children: [
      {
        courseName: 'Trees',
        children: [{ courseName: 'Nested Tree' }, { courseName: 'Flat Tre' }],
      },
    ],
  },
  {
    courseName: "Angular Reactive Forms",
    children: [
      { courseName: "Form Control"},
      {
        courseName: "formGroup",
        children: [
          { courseName: "formArray in formGroups"},
          { courseName: "formControls in formGroup"},
          { courseName: "formGroup in another formGroup"}
        ]
      }
    ]
  }
];
