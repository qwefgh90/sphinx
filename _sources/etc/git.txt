.. _git_intro:

*****************
Git
*****************

===============
 라이프 사이클
===============

Untracked - Unmodified - Modified - Staged::

  # 아래 명령어로 Staged로 이동시킬 수 있다.
  git add aa.txt 
  # 상태는 다음과 같이 변한다.
  # Tracked 파일을 수정할 경우 Untracted -> Unmodified
  # 수정한 파일을 Staged로 올리면 Modified -> Staged
  # Commit을 하면 Staged -> Unmodified
  # 파일을 삭제하면 Unmodified -> Untracted

======
 diff
======

Modified이나 Staged가 아닌 파일을 비교할때는 *git diff를* 사용한다.

Staged인 파일을 비교할때는 *git diff --staged 를* 사용한다.

========
 Rebase
========

갈라져 나온 브랜치(feature-1)에서 작업이 끝났을때 변경사항에 대한 패치를 만들어 합칠 브랜치(master)에 패치를 적용하는 것을 뜻한다. 합칠 브랜치는 Fast-forward 하여 Rebase 한 브랜치가 만든 커밋을 가르킨다.

명령어는 다음과 같다.::

    # 갈라져 나온 브랜치 (feature-1)
    git checkout feature-1
    # 공통 조상 부터 패치를 만들어 master에 적용시킨다.
    git rebase master
    # master로 HEAD를 바꾼뒤 fast-forward한다.
    git checkout master
    git merge feature-1
 
히스토리를 선형적으로 정리할 수 있다는 장점이 있으며, 갈라져 나온 브랜치가 계속 관리되는 브랜치가 아닐때 rebase를 사용하면 좋다. 
**단 merge로 생성한 commit을 서버에 push한 뒤 다시 로컬에서 rebase로 정리한 뒤 commit을 하면 그 사이에 작업한 다른 개발자의 결과물은 이전 병합 commit을 가르키게 되므로 히스토리가 꼬이게 된다.**

커밋을 삭제하고 싶을 경우 rebase를 이용해 에디팅 할 수 있다.::

  git rebase -i HEAD~2
  git push -f origin master
 
=======
 Merge
=======

Fast-forward는 commit 포인터를 그대로 **다른 브랜치의 commit 포인터로 이동시키는 것이다. 단 이동할 commit의 조상이 현재 브랜치여야 한다.** ::

  git checkout master
  git merge feature-1

Fast-forward가 가능하지 않을 경우 3-way merge를 수행한다. 공통조상, 현재 브랜치의 커밋, 병합할 브랜치의 커밋을 이용해 병합을 수행한다. commit 포인터를 생성된 commit으로 이동시킨다.
`3-way merge 알고리즘 <https://blog.npcode.com/2012/09/29/3-way-merge-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%97%90-%EB%8C%80%ED%95%B4/>`_ 에 대해 잘 설명한 링크이다.

========
 Commit
========

되돌리기
========

실수로 Staged하는 파일을 까먹었다면 --amend로 해결할 수 있다.::

  git commit -m "commit missing some files"
  git add forgotten_file
  git commit --amend

실수로 Staged 했다면 reset으로 해결할 수 있다.::

  git reset HEAD go_unstaged.md

실수로 Modified 했다면 checkout으로 해결할 수 있다.::

  git checkout -- go_unmodified.md

=======
 Stash
=======

Tracked Modified 이거나 Staged 인 파일들을 임시로 저장할 수 있다.::

  git stash save
  git stash list
  git stash apply

======
 참조
======

- rebase: https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0
