import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface CourseNode {
  name: string;
  children?: CourseNode[];
}

const TREE_DATA: CourseNode[] = [
  {
    name: 'Angular material',
    children: [
      { name: 'Menus' },
      {
        name: 'Tree',
        children: [{ name: 'Nested Tree' }, { name: 'Flat Tree' }],
      },
    ],
  },
  {
    name: 'Reactive forms with angular',
    children: [
      { name: 'Form Control' },
      { name: 'form Array' },
      {
        name: 'Form Group',
        children: [
          { name: 'formControl ' },
          { name: 'formArray' },
          { name: 'formGroup' },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-nested-tree',
  templateUrl: './nested-tree.component.html',
  styleUrls: ['./nested-tree.component.css'],
})
export class NestedTreeComponent implements OnInit {
  nestedTreeDataSource: MatTreeNestedDataSource<CourseNode> =
    new MatTreeNestedDataSource<CourseNode>();
  nestedTreeControl = new NestedTreeControl<CourseNode>(
    (node) => node.children
  );

  public hasNestedChild(index: number, courseNode: CourseNode): boolean {
    return courseNode.children ? courseNode.children.length > 0 : false;
  }

  constructor() {}

  public ngOnInit(): void {
    this.nestedTreeDataSource.data = TREE_DATA;
  }
}
