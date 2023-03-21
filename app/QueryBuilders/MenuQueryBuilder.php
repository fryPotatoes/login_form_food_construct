<?php

namespace App\QueryBuilders;
use App\Models\Menu;
use Illuminate\Database\Eloquent\Builder;



final class MenuQueryBuilder extends QueryBuilder {

    public Builder $model;

    public function __construct(){
        $this->model = Menu::query();
    }

    public function getAll()
    {
        return $this->model->get();
    }

    public function getPagination(int $quan=10)
    {
        return $this->model->paginate($quan);
    }

    public function getOne(int $id)
    {
        return $this->model->where('id', $id)->get();
    }

}
